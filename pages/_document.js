import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render(){
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript /> 
                    <div id="modal">
                        
                    </div>
                    <div id='account-modal'>

                    </div>
                </body>
            </Html>
        )
    }
}

export default MyDocument