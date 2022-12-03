const {
    exec
} = require('child_process');
const {
    promisify
} = require('util');
const execAsync = promisify(exec);

const nvidiaCommands = {
    exec: 'nvidia-smi --query-gpu=',
    format: ' --format=csv,noheader',
    temperature: 'temperature.gpu',
    CPUClock: 'clocks.sm',
    mem: {
        clock: 'clocks.mem',
        used: 'memory.used',
        total: 'memory.total',
    },
}

const execCommand = async cmd => parseInt((await execAsync(nvidiaCommands.exec + cmd + nvidiaCommands.format)).stdout);

const getGPUTotalMem = async () => await execCommand(nvidiaCommands.mem.total);

const getData = async () => {
    try {
        const data = {
            cpuTemp: Number((await execAsync('wmic /namespace:\\\\root\\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature /value'))
                .stdout.split('=')[1]) / 10 - 273,
            gpuData: {
                temperature: await execCommand(nvidiaCommands.temperature),
                CPUClock: await execCommand(nvidiaCommands.CPUClock),
                mem: {
                    clock: await execCommand(nvidiaCommands.mem.clock),
                    used: await execCommand(nvidiaCommands.mem.used),
                }
            },
        }

        return data;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getData,
    getGPUTotalMem,
}