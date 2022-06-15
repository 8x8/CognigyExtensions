import { createExtension } from '@cognigy/extension-tools/build';
import { onForwardSuccess, onForwardFailure, forwardCallServiceNode as checkForwardResultNode, onForwardDefault, onForwardTermination } from './nodes/checkForwardResult';
import { terminateCallNode } from './nodes/terminateCall';
import { forwardCallNode } from './nodes/forwardCall';
import { bridgeCallNode } from './nodes/bridgeCall';
import { playNode } from './nodes/play';
import { recordingStartNode } from './nodes/recordingStart';
import { recordingStopNode } from './nodes/recordingStop';
import { sendDataNode } from './nodes/data';
import { promptForNumberNode } from './nodes/numberPrompt';
import { promptForMultipleChoice } from './nodes/multipleChoicePrompt';
import { speakNode } from './nodes/speak';
import { setSpeechtoTextServiceNode } from './nodes/setSpeechToTextService';

export default createExtension({
  nodes: [
    promptForNumberNode,
    promptForMultipleChoice,
    recordingStartNode,
    recordingStopNode,
    playNode,
    sendDataNode,
    forwardCallNode,
    bridgeCallNode,
    terminateCallNode,
    speakNode,
    onForwardSuccess, // child
    onForwardFailure, // child
    onForwardTermination, // child
    onForwardDefault,  // child
    checkForwardResultNode,
    setSpeechtoTextServiceNode,
  ],
  options: {
    label: 'VIER Voice'
  }
});