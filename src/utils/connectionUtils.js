import { CLASSIFIEDCONNECTIONS } from "../defaultElementsConfig";
import { FORBIDDENCONNECTIONS } from "../defaultElementsConfig";

export function connectionValidator(sourceNodeType, targetNodeType) {
  const result = FORBIDDENCONNECTIONS.find(
    (element) =>
      (element.source == sourceNodeType && element.target == targetNodeType) ||
      (element.target == sourceNodeType && element.source == targetNodeType)
  );

  if (result == undefined) {
    //no forbidden connections found
    return true;
  } else {
    //forbidden connections found
    return false;
  }
}

export function connectionClassifier(sourceNodeType, targetNodeType) {
  // nodeTypes: FunctionNode ProductNode ResourceNode
  // edgeTypes:  CommunicationEdge, AssignmentEdge, FlowEdge
  // classifierArray = [{nodeTypeA, nodeTypeB, edgeType}, ..{}]

  const result = CLASSIFIEDCONNECTIONS.find(
    (element) =>
      (element.source == sourceNodeType && element.target == targetNodeType) ||
      (element.target == sourceNodeType && element.source == targetNodeType)
  );

  if (result == undefined) {
    console.log("Connection coult not be classified -> Fallback is Assignment");
    return "AssignmentEdge";
  } else {
    return result.edge;
  }
}
