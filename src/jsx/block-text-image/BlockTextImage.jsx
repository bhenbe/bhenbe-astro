import './BlockTextImage.css'

const BlockTextImage = ({ title, slug, content, image }) => {
    return (
		<>
			<section id={slug} className="block-text-image container">

                <div>

                    <figure>

                        <img src={image.url} width={image.width} height={image.height}  alt="" />

                    </figure>

                    <div className="block-text-image__content">

                        <h2>{title}</h2>

                        <div dangerouslySetInnerHTML={{__html: content}} />

                    </div>

                </div>

            </section>
		</>
	);
}

export default BlockTextImage;