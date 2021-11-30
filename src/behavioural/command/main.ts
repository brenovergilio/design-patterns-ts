import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroonLight = new SmartHouseLight('Luz Quarto');

// Command
const lightPowerCommand = new LightPowerCommand(bedroonLight);
const lightIntensityCommand = new LightIntensityCommand(bedroonLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.addCommand('btn-2', lightIntensityCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-1');
smartHouseApp.undoCommand('btn-2');
