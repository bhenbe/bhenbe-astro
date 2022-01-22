import Button from '../button/Button'
import './BlockCta.css'

const BlockCta = ({ content, label, url }) => {
	return (
		<>
			<aside className="block-cta container no-print">

                <span className="block-cta-loud">{content}</span>

                <Button url={url} label={label} btnclass="primary" />

            </aside>
		</>
	);
}

export default BlockCta;