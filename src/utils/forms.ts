export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function validate(inputs: any, name: string) {
  if (!inputs[name].validation) {
    return inputs;
  }
}

export function updateAndValidate(inputs: any, name: string, newValue: any) {
  const dataUpdated = update(inputs, name, newValue);
  const dataValidated = validate(dataUpdated, name);
  return dataValidated;
}
