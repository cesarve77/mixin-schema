
export const schemaMixin = function (methodOptions) {
    methodOptions.validate = methodOptions.schema.validator({clean: true});
    return methodOptions;
}

export default schemaMixin
