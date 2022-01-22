import './BlockClient.css'

const BlockClient = ({ title, content }) => {
	return (
		<>
			<aside className="block-client container">

                <strong>{title}</strong>

                <div className="block-client-list">

                <div dangerouslySetInnerHTML={{__html: content}} />

                </div>

            </aside>
		</>
	);
}

export default BlockClient;