import { StructuredText } from "react-datocms";
import BlockClient        from "jsx:block-client/BlockClient";
import BlockCta           from "jsx:block-cta/BlockCta";
import BlockText          from "jsx:block-text/BlockText";
import BlockTextImage     from "jsx:block-text-image/BlockTextImage";

export default DatoStructuredText = (data) => {
    return (
    <>
        <StructuredText 
            data={data.data} 
            renderBlock={({ record }) => {
                switch (record.__typename) {
                    case 'BlockTextRecord': 
                        return <BlockText 
                                title={record.blockTextTitle} 
                                content={record.blockTextContent}
                                image={record.backgroundImage}
                                />;
                    case 'BlockTextImageRecord': 
                        return <BlockTextImage 
                                title={record.blockTextImageTitle} 
                                slug={record.slug}
                                content={record.blockTextImageContent}
                                image={record.blockTextImageImage}
                                />;
                    case 'BlockCtaRecord': 
                        return <BlockCta 
                                content={record.blockCtaContent}
                                label={record.blockCtaLabel}
                                url={record.blockCtaUrl}
                                />;
                    case 'BlockClientRecord': 
                        return <BlockClient 
                                title={record.blockClientTitle} 
                                content={record.blockClientContent}
                                />;
                    default:
                        return null;
                }
            }}
        />
    </>
    );
}