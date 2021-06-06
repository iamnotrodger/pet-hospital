import { useEffect, useRef, useState } from 'react';

const useDynamicSVGImport = (name, options = {}) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { onCompleted, onError } = options;
    useEffect(() => {
        const importIcon = async () => {
            setLoading(true);
            try {
                ImportedIconRef.current = (
                    await import(
                        `!!@svgr/webpack?-svgo,+titleProp,+ref!../icon/${name}.svg`
                    )
                ).default;
                if (onCompleted) {
                    onCompleted(name, ImportedIconRef.current);
                }
            } catch (err) {
                if (onError) {
                    onError(err);
                }
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
};

export default useDynamicSVGImport;
