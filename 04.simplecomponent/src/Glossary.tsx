import React, { Component, Fragment } from "react";

interface GlossaryProps {
  items: { term: string; description: string }[];
}

export default class Glossary extends Component<GlossaryProps, any> {
  render() {
    return (
      <>
        <div>
          <dl>
            {this.props.items.map((t) => (
              <>
                <dt>{t.term}</dt>
                <dd>{t.description}</dd>
              </>
            ))}
          </dl>
        </div>
        <div>
          <h1>Prova</h1>
        </div>
      </>
    );
  }
}
