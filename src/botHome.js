import './botHome.css';

const BotHome = () => {
    return(
        <div className="bot">
            <header
                className = 'bot-header'
            >
                言葉は綺麗に使いましょう！
            </header>

            <body
                className = 'bot-body'
            >

            </body>

            <footer
                className = 'bot-footer'
            >
                <button
                    className = 'create-new'
                >
                    入力
                </button>
            </footer>
        </div>
    );
};

export default BotHome;