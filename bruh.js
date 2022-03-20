    const handleSubmit = (event) => {
      console.log(hmmm);
      if(hmmm){
          window.location.reload();
        }
        event.preventDefault();
          const run = async () => {
            var scriptText = 'hello = ' + hydg + '\n';
            scriptText += await (await fetch(script)).text();
            console.log(scriptText);
            const out = await runScript(scriptText);
            setOutput(out);
            setHmmm(true);
          }
          run();
          console.log(hmmm);
    }
