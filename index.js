import { Command } from "commander";
import fs from "fs";
import inquirer from "inquirer";

const program = new Command();
const questions = [
    {
        type: "input",
        name: "title",
        message: "please enter course title",
    },
    {
        type: "input",
        name: "price",
        message: "please enter course price",
    },
];
const filePath = "./courses.json";

program.name("cli").description("cli to make command line").version("1.0.0");

program
    .command("add")
    .alias("a")
    .description("add a course")
    .action(() => {
        inquirer.prompt(questions).then((answers) => {
            console.log(answers);
            if (fs.existsSync(filePath)) {
                fs.readFile(filePath, "utf-8", (err, fileContent) => {
                    if (err) {
                        console.log("err", err);
                        process.exit();
                    }
                    console.log("fileContent", fileContent);
                    const fileContentAsJson = JSON.parse(fileContent);
                    fileContentAsJson.push(answers);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(fileContentAsJson),
                        "utf8",
                        () => {
                            console.log("add courses done");
                        }
                    );
                });
            } else {
                fs.writeFile(
                    filePath,
                    JSON.stringify([answers]),
                    "utf8",
                    () => {
                        console.log("add courses done");
                    }
                );
            }
        });
    });

program
    .command("list")
    .alias("l")
    .description("list all courses")
    .action(() => {
        fs.readFile(filePath, "utf-8", (err, fileContent) => {
            if (err) {
                console.log("err", err);
                process.exit();
            }
            console.table(JSON.parse(fileContent));
        });
    });

program.parse(process.argv);
