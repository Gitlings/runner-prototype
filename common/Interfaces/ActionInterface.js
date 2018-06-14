import InterfaceImplementation from '../Utils/InterfaceImplementation';

function ActionInterface(action, interfaceImplementation) {
  const implementation = new InterfaceImplementation(this, action, interfaceImplementation);

  this.getTimeOccurred = () => implementation.callMethod('getTimeOccurred');

  this.setTimeOccurred = time => implementation.callMethod('setTimeOccurred', time);
}

export default ActionInterface;