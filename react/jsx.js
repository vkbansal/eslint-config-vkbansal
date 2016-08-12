module.exports = {
	"react/jsx-boolean-value": ["error", "never"],
	"react/jsx-closing-bracket-location": ["warn", {"location": "after-props"}],
	"react/jsx-curly-spacing": ["error", "never"],
	"react/jsx-equals-spacing": ["error", "never"],
	"react/jsx-handler-names": ["warn", {
		"eventHandlerPrefix": "handle",
		"eventHandlerPropPrefix": "on"
	}],
	"react/jsx-indent-props": ["warn", 4],
	"react/jsx-indent": "warn",
	"react/jsx-key": "error",
	"react/jsx-max-props-per-line": "off",
	"react/jsx-no-bind": "off",
	"react/jsx-no-duplicate-props": ["error", {
		"ignoreCase": true
	}],
	"react/jsx-no-literals": "off",
	"react/jsx-no-undef": "error",
	"react/jsx-pascal-case": "error",
	"react/jsx-sort-props": "off",
	"react/jsx-space-before-closing": ["warn", "never"],
	"react/jsx-uses-react": "error",
	"react/jsx-uses-vars": "warn"
}
