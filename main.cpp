#include <iostream>
#include <vector>
#include <string>

int tempMem;
std::vector<std::string> paths;
std::string commandString;
std::vector<int> customCommands;
bool filledSpace = false;
int main();
void startAction();

void printError(int errorCode)
{
    switch (errorCode)
    {
    case 100:
        std::cout << "You have entered an invalid command!" << '\n';
        break;
    case 200:
        std::cout << "Please select one of the available commands.";
        startAction();
        break;
    }
}
void emptySpace()
{
    std::cout << " ";
}
void introduction()
{
    std::cout << "While loop" << "\n";
    std::cout << "Welcome to Shortcuts! Press the corresponding button for the action you wish to acomplish." << '\n';
}
void printSelection()
{
    for (int i = 0; i < paths.size(); i++)
    {
        std::cout << "[" << i << "]";
        emptySpace();
        std::cout << paths[i] << '\n';
    }
}
void addSelections()
{
    paths.push_back("restart");
    paths.push_back("shutdown");
    paths.push_back("hibernate");
    paths.push_back("Fill this space and create a custom shortcut");
}

void confirmSelection()
{
    std::cout << "Confirm? [0 = No ; 1 = Yes]";
    std::cin >> tempMem;
}

void startAction()
{
    printSelection();
    std::cin >> tempMem;

    if (tempMem == 0)
    {
        confirmSelection();
        if (tempMem == 1)
        {
            system("sudo reboot");
            // If the first reboot doesn't pass, for example if using a systemd linux, run the other line:
            system("sudo systemctl reboot");
        }
        else
        {
            printError(100);
            startAction();
        }
    }
    else if (tempMem == 1)
    {
        confirmSelection();
        if (tempMem == 1)
        {
            system("sudo shutdown -h now");
            // If the first poweroff doesn't pass, for example if using a systemd linux, run the other line:
            system("sudo systemctl poweroff");
        }
        else
        {
            printError(100);
            startAction();
        }
    }
    else if (tempMem == 2)
    {
        confirmSelection();
        if (tempMem == 1)
        {
            system("systemctl suspend");
            // If doesnt work, proceed to the next command;
            system("systemctl hibernate");
        }
        else
        {
            printError(100);
            startAction();
        }
    }
    else if (tempMem == 3)
    {
        if (!filledSpace)
        {
            std::string customCommand;
            std::cout << "Enter a Linux Command to simplify: ";
            std::cin.ignore();
            std::getline(std::cin, customCommand);
            customCommands.push_back(paths.size() - 1);
            paths.pop_back();
            paths.push_back(customCommand);
            filledSpace = true;
            startAction();
        } else {
            system(paths.back().c_str());
        }
    }
    else
    {
        printError(200);
    }
}

int main()
{
    introduction();
    addSelections();
    startAction();

    return 0;
}
