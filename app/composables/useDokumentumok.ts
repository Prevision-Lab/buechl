import { readItems } from '@directus/sdk';

export interface Dokumentum {
    id: number;
    cim: string;
    alcim: string;
    tipus: string;
    meret: string;
    nyelv: string;
    file: string | null;
    filename: string | null;
}

export const useDokumentumok = () => {
    const { $directus } = useNuxtApp();
    const config = useRuntimeConfig();

    const {
        data: dokumentumok,
        pending,
        error,
        refresh,
    } = useAsyncData('dokumentumok', async () => {
        try {
            const items = await $directus.request(
                readItems('dokumentumok', {
                    filter: {
                        status: { _eq: 'published' },
                    },
                    fields: [
                        'id',
                        'cim',
                        'alcim',
                        'tipus',
                        'meret',
                        'nyelv',
                        'file.id',
                        'file.filename_download',
                    ],
                    sort: ['sort', 'id'],
                    limit: -1,
                }),
            );

            return (items || []).map((item: any) => ({
                id: item.id,
                cim: item.cim,
                alcim: item.alcim,
                tipus: item.tipus,
                meret: item.meret,
                nyelv: item.nyelv,
                file: item.file?.id || null,
                filename: item.file?.filename_download || null,
            })) as Dokumentum[];
        } catch (err) {
            console.error('Error fetching dokumentumok:', err);
            return [] as Dokumentum[];
        }
    });

    const getFileUrl = (fileId: string | null, filename?: string | null) => {
        if (!fileId) return null;
        const url = `${config.public.directusUrl}/assets/${fileId}`;
        return filename
            ? `${url}?download=${encodeURIComponent(filename)}`
            : `${url}?download`;
    };

    return {
        dokumentumok,
        pending,
        error,
        refresh,
        getFileUrl,
    };
};
