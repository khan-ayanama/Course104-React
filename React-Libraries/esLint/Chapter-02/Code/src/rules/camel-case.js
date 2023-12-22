module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
        description: 'Enforce camelCase variable naming',
        category: 'Stylistic Issues',
        recommended: true,
        },
        fixable: 'code',
    },
    create: function (context) {
        return {
        VariableDeclarator(node) {
            const { id } = node;

            if (id && id.name && !id.name.match(/^[a-z][a-zA-Z]*$/)) {
            context.report({
                node,
                message: 'Variable names must be in camelCase',
                fix: function (fixer) {
                return fixer.replaceText(id, id.name.replace(/^[A-Z]/, (c) => c.toLowerCase()));
                },
            });
            }
        },
        };
    },
    };