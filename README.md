# uVisor (Nvidia GPU Info)

![Nvidia GPU](https://img.shields.io/badge/Nvidia-GPU-informational?style=flat&logo=nvidia&logoColor=white&color=2bbc8a)

``uVisor`` a simple application that replaces the f***ing `GeForce Expirience`, which provides brief information about the Nvidia graphics card installed on your computer:

- Current GPU temperature
- Used and total GPU memory
- GPU processor frequency

## Fast run

Download [zip](https://drive.google.com/file/d/1_DtPHBLRAncIErIQRcsrcp3KOPrmZKej/view?usp=sharing) file, unpack and run uvisor.exe

## Installation 

To run the program, you need to install [Node.js](https://nodejs.org/) on your computer.

1. Clone the repository to your local machine:

```bash
git clone https://github.com/HypeMachine/uVisor.git
```

2. Navigate to the project directory:

```bash
cd /path/to/uvisor
```

3. Install all dependencies:

```bash
npm i
```

4. Run the program by entering the following command in the terminal:

```bash
npm start
```

## Debug

If you encounter errors while executing the program, you can run the debug mod as follows:

```bash
npm run debug
```

## Compile

If you wish to compile and execute new binary (**Windows** only):

```bash
npm run compile
```

## Nvidia graphics cards support

At the moment, the program runs correctly on the following GPUs:

* **RTX 3060**
* **RTX 3070**
* **RTX 4060**
