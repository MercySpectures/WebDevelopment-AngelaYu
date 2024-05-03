# QR Code Generator

This is a simple QR code generator built with Node.js using the `inquirer` and `qr-image` packages.

## Features

- Takes a URL input from the user via terminal.
- Generates a QR code for the provided URL.
- Saves the generated QR code image in the current directory.
- Logs the name of the URL in a text file.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm init` to instialise npm.
4. Run `npm i inquirer qr-image` to install packages.
5. Do not forget to add `"type": "module"` this line in package.json file

## Usage

1. Open your terminal.
2. Navigate to the project directory.
3. Run `node index.js`.
4. Follow the prompts to enter the URL.
5. The QR code will be generated and saved in the current directory.
6. The name of the URL will be logged in a text file.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
