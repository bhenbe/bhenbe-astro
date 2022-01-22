import './BlockText.css'

const BlockText = ({ title, content, image }) => {
	return (
		<>
			<main id="main" className="block-text">

                <div className="container">

                    <div>

                        <h1>{title}</h1>

                        <div dangerouslySetInnerHTML={{__html: content}} />

                        <p className="no-print">
                            
                            <a href="mailto:contact@bhen.be" className="btn btn-primary">Parlons de votre projet</a>
                            
                            <a href="#je-suis-designer-web" className="more-info">ou découvrez-en plus sur moi...</a>

                        </p>

                    </div>

                    <img src={image.url} width={image.width} height={image.height}  alt="" />

                </div>

            </main>
		</>
	);
}

export default BlockText;