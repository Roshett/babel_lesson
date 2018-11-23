module.exports = function(babel) {
	return {
		visitor: {
			VariableDeclaration: function(path) {
				path.node.kind = "let"
			}
		}
	}
}