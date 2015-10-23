import React from 'react/addons';
import Playground from 'component-playground';
import a from 'raw!./a.example';
import b from 'raw!./b.example';
import c from 'raw!./c.example';
import Code from '../../code.jsx';

export default React.createClass({
    render() {
        return (
            <div>
                <h3><Code>let</Code> instruction</h3>

                <p><Code>let</Code> is a new instruction that creates a variable available only in the block it was defined in.</p>
                <Playground codeText={a} es6Console={true} scope={{}}/>

                <p>Warning: unlike with the <Code>var</Code> instruction, the variable declaration is <strong>not</strong> hoisted with <Code>let</Code>.</p>
                <Playground codeText={b} es6Console={true} scope={{}}/>

                <h3><Code>const</Code> instruction</h3>
                <p>
                    <Code>const</Code> is another block-scoped instruction, which shares the same rules as <Code>let</Code>, and contains one more rule.
                    Since <Code>const</Code> declares a constant, it cannot be reassigned.
                </p>
                <Playground codeText={c} es6Console={true} scope={{}}/>
            </div>
        );
    }
});
