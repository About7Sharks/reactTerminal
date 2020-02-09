import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class App extends Component {
    async componentDidMount(){
    await setTimeout(function(){console.log('This projects my attempt to become more comfortable with react')}, 1000);
    await setTimeout(function(){console.log('type help for a list of commands!')}, 2000);
  }

  aboutZac = () => `Currentley i'm working as Fullstack Software Engineer on the development of the Accubrew system with Gulf Fiberoptics, in short we use lasers to make sure your beer tastes good. I've been implementing this system with the MEVN stack leveraging the latest techniques to really push the project forward.`
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          watchConsoleLogging
          color='green'
          backgroundColor='black'
          promptSymbol='🦈>'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-about7sharks': () => window.open('https://about7sharks.com/', '_blank'),
            'open-accubrew': () => window.open('https://accubrew.io/', '_blank'),
            'open-zacarlin': () => window.open('https://zacarlin.com/', '_blank'),
            aboutZac: this.aboutZac,
            // popup: () => alert('Terminal in React'),
            'type-text': (args, print, runCommand) => {
              const text = args.slice(1).join(' ');
              print('');
              for (let i = 0; i < text.length; i += 1) {
                setTimeout(() => {
                  runCommand(`edit-line ${text.slice(0, i + 1)}`);
                }, 100 * i);
              }
            }

          }}
          descriptions={{
            'open-google': 'opens google.com',
            aboutZac: 'learn a bit about Zac',
            // alert: 'alert', popup: 'alert'
            'open-accubrew': 'goes to accubrew.io a craft brewing platform',
            'open-zacarlin': 'goes to zacarlin.com',
            'type-text':'type out your input back to you'
          }}
          msg='Zach-- Welcome to a terminal sytle site :D'
        />
      </div>
    );
  }

}
export default App;
