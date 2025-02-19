---
title: How To Re-render a Lit Element When Lit Context Changes
description: Lit will not re-render when objects or arrays are manipulated in context. this.requestUpdate() is here to fix this. 
publishDate: 2025-02-20
---

# How To Re-render a Lit Element When Lit Context Changes

There’s a problem with Lit Context when we want to have a reactivity inside our HTML that relies on data types such as arrays and objects in the global context. Lit Context will not tell the element to re-render if arrays and objects have been manipulated such as adding an item to an array, or changing a property value inside an object. This can be annoying when we want to store a list of todos globally for example.

There’s a way we can manually tell Lit to re-render the element when our context changes.

```ts
this.requestUpdate() // Well isn't this handy.
```

This method on `this` (`this` referring to our Lit element) will tell Lit to re-render the HTML so all variables used inside our HTML template literal is up-to-date.

So how can we tell our Lit element that our data has changed inside our context?

Let’s bubble up an event from our context to be listened to by elements that will need to be updated on context changes.

```ts
// todo-context.ts
import { createContext } from '@lit/context';

export class TodoContext {
  todos: string[] = [];

  add(todo: string) {
    this.todos.push(todo);
    window.dispatchEvent(new Event('todos-updated'));
  }
  remove(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
    window.dispatchEvent(new Event('todos-updated'));
  }
}

export const todoContext = createContext<TodoContext>('todo-context');
```

Inside our todo context we store an array of all our todos, with 2 methods to add and remove items.

```ts
window.dispatchEvent(new Event('todos-updated'));
```

We will dispatch an event to `window` to say the todos have been updated. This is the event we will listen for inside any element that requires a re-render when the todos array changes.

At the root of the application we should create this context based off the `TodoContext` we just defined.

```ts
// app.ts
import { html, LitElement } from 'lit';
import { provide } from '@lit/context';
import { customElement } from 'lit/decorators.js';
import { TodoContext, todoContext } from './todoContext';

@customElement('app-element')
export class App extends LitElement {
  @provide({ context: todoContext })
  todoContext = new TodoContext();

  render() {
    return html`
      <main>
        <todo-list></todo-list>
      </main>
    `;
  }
}
```

Then inside our `todo-list` element we will consume this context and add an event listener on `window` to listen for the `todos-updated` event that is dispatched from our context.

```ts
// todo-list.ts
import { consume } from '@lit/context';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TodoContext, todoContext } from './todoContext';
import { repeat } from 'lit/directives/repeat.js';

@customElement('todo-list')
export class TodoList extends LitElement {
  @state() inputValue = '';

  @consume({ context: todoContext })
  @property({ attribute: false })
  todoContext!: TodoContext;

  constructor() {
    super();

    window.addEventListener('todos-updated', () => {
      this.requestUpdate();
    });
  }

  private _addTodo() {
    this.todoContext.add(this.inputValue);
    this.inputValue = '';
  }

  private _removeTodo(index: number) {
    this.todoContext.remove(index);
  }

  render() {
    return html`
      <input
        type="text"
        .value=${this.inputValue}
        @input=${(e: Event) =>
          (this.inputValue = (e.target as HTMLInputElement).value)}
      />
      <button @click=${this._addTodo}>Add</button>
      <h2>Todos</h2>
      <ul>
        ${repeat(
          this.todoContext.todos,
          (_, index) => index,
          (todo, index) => html`
            <li>
              ${todo}
              <button @click=${() => this._removeTodo(index)}>❌</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
```

You can see inside our event listener in the constructor we will call the `this.requestUpdate()` function every time an update has occurred in our context object. This will re-render the HTML and update the list items accordingly. 

This is something I was stuck on for quite a few hours and I was hoping there was a built-in way of handling this such as a deep watcher. But this is the solution I came up with and it works splendidly.

Here’s a [link to the GitHub repo](https://github.com/LouieRichardson99/lit-context-example) for the full code example.

Hope this helps!