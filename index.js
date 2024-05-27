import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//create a qr code by using 2 packages of npm (inquirer, qr-image)
inquirer
    .prompt([
        { "message": "Type your url", name: "URL" }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr-img.png'));

        fs.writeFile('qr-txt.txt', url, (err)=> {
            if(err) throw err;
            console.log('great')
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });