// --------------------- General Attributs
export const GENERAL_NODE_ATTRIBUTS = { generalTestAttr: "empty" };
export const GENERAL_NODE_DATA = { name: "undefined" };

export const GENERAL_EDGE_ATTRIBUTS = { generalTestAttr: "empty" };
export const GENERAL_EDGE_DATA = { name: "undefined" };

// --------------------- Specific Node Attributs and Data ---------------------
// FunctionNode
export const FUNCTION_NODE_ATTR = {
  ...GENERAL_NODE_ATTRIBUTS,
  type: "FunctionNode",
};

export const FUNCTION_NODE_DATA = {
  ...GENERAL_NODE_DATA,
  funcContent: "empty",
  functionType: "undefined",
};

// ResourceNode
export const RESOURCE_NODE_ATTR = {
  ...GENERAL_NODE_ATTRIBUTS,
  type: "ResourceNode",
};
export const RESOURCE_NODE_DATA = {
  ...GENERAL_NODE_DATA,
  resContent: "empty",
  resourceType: "undefined",
};

// ProductNode
export const PRODUCT_NODE_ATTR = {
  ...GENERAL_NODE_ATTRIBUTS,
  type: "ProductNode",
};

export const PRODUCT_NODE_DATA = {
  ...GENERAL_NODE_DATA,
  prodContent: "undefinded",
};

// --------------------- Specific Edge Attributs and Data ---------------------
// CommunicationEdge
export const COMMUNICATION_EDGE_ATTR = {
  ...GENERAL_EDGE_ATTRIBUTS,
  type: "CommunicationEdge",
};
export const COMMUNICATION_EDGE_DATA = {
  commContent: "empty",
  communicationType: "undefined",
};
// ProductFlowEdge
export const PRODUCTFLOW_EDGE_ATTR = {
  ...GENERAL_EDGE_ATTRIBUTS,
  type: "FlowEdge",
};
export const PRODUCTFLOW_EDGE_DATA = { prodflowContent: "empty" };
// AssignmentEdge
export const ASSIGNMENT_EDGE_ATTR = {
  ...GENERAL_EDGE_ATTRIBUTS,
  type: "AssignmentEdge",
};
export const ASSIGNMENT_EDGE_DATA = { assignContent: "empty" };

// --------------------- SubClasses of "System Functions" -------------------------
export const FUNCTIONTYPS = [
  { functionType: "Automate" },
  { functionType: "Process" },
  { functionType: "Record" },
  { functionType: "Store" },
  { functionType: "Train" },
  { functionType: "Inference" },
  { functionType: "Transform" },
];

// ------------------------- SubClasses of "TechnicalRessources" -------------------------
export const TECHNICALRESOURCESTYPS = [
  { resourceType: "Sensor" },
  { resourceType: "Actuator" },
  { resourceType: "Controller" },
  { resourceType: "Edge Device" },
  { resourceType: "Computer System" },
  { resourceType: "Cloud System" },
];

// ------------------------- SubClasses of "Communication" -------------------------
export const COMMUNICATIONTYPS = [
  { communicationType: "W-Lan" },
  { communicationType: "Lan" },
  { communicationType: "Bluetooth" },
];

// --------------------- RULES AND CONDITIONS ---------------------
// Conditions for the classification of Edges
export const CLASSIFIEDCONNECTIONS = [
  //ResourceNode --> ResourceNode : CommunicationEdge
  { source: "ResourceNode", target: "ResourceNode", edge: "CommunicationEdge" },
  //Product --> Resource || Resource --> Product CommunicationEdge
  { source: "ProductNode", target: "ResourceNode", edge: "CommunicationEdge" },
  //Resource --> Function || Function --> Resource : AssignmentEdge
  { source: "ResourceNode", target: "FunctionNode", edge: "AssignmentEdge" },
  //Product --> Function || Function --> Product : FlowEdge
  { source: "ProductNode", target: "FunctionNode", edge: "FlowEdge" },
];

// Conditions for the classification of forbidden Connections
export const FORBIDDENCONNECTIONS = [
  // Function --> Function : false
  { source: "FunctionNode", target: "FunctionNode" },
  // Product --> Product : false
  { source: "ProductNode", target: "ProductNode" },
];