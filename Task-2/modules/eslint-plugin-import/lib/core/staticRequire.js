'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =
isStaticRequire; // todo: merge with module visitor
function isStaticRequire(node) {return node &&
  node.callee &&
  node.callee.type === 'Identifier' &&
  node.callee.name === 'require' &&
  node.arguments.length === 1 &&
  node.arguments[0].type === 'Literal' &&
  typeof node.arguments[0].value === 'string';
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3N0YXRpY1JlcXVpcmUuanMiXSwibmFtZXMiOlsiaXNTdGF0aWNSZXF1aXJlIiwibm9kZSIsImNhbGxlZSIsInR5cGUiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFDd0JBLGUsRUFEeEI7QUFDZSxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUErQixDQUM1QyxPQUFPQTtBQUNMQSxPQUFLQyxNQURBO0FBRUxELE9BQUtDLE1BQUwsQ0FBWUMsSUFBWixLQUFxQixZQUZoQjtBQUdMRixPQUFLQyxNQUFMLENBQVlFLElBQVosS0FBcUIsU0FIaEI7QUFJTEgsT0FBS0ksU0FBTCxDQUFlQyxNQUFmLEtBQTBCLENBSnJCO0FBS0xMLE9BQUtJLFNBQUwsQ0FBZSxDQUFmLEVBQWtCRixJQUFsQixLQUEyQixTQUx0QjtBQU1MLFNBQU9GLEtBQUtJLFNBQUwsQ0FBZSxDQUFmLEVBQWtCRSxLQUF6QixLQUFtQyxRQU5yQztBQU9EIiwiZmlsZSI6InN0YXRpY1JlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBtZXJnZSB3aXRoIG1vZHVsZSB2aXNpdG9yXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJlxuICAgIG5vZGUuY2FsbGVlICYmXG4gICAgbm9kZS5jYWxsZWUudHlwZSA9PT0gJ0lkZW50aWZpZXInICYmXG4gICAgbm9kZS5jYWxsZWUubmFtZSA9PT0gJ3JlcXVpcmUnICYmXG4gICAgbm9kZS5hcmd1bWVudHMubGVuZ3RoID09PSAxICYmXG4gICAgbm9kZS5hcmd1bWVudHNbMF0udHlwZSA9PT0gJ0xpdGVyYWwnICYmXG4gICAgdHlwZW9mIG5vZGUuYXJndW1lbnRzWzBdLnZhbHVlID09PSAnc3RyaW5nJztcbn1cbiJdfQ==