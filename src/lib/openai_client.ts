import { PUBLIC_AUTHORIZATION, PUBLIC_API_URL } from '$env/static/public'

type ImageResponse = {
    url?: string;
    success: boolean;
    error?: string;
}

export type CompletionProps = {
    model: string
    prompt: string,
    top_p: number,
    temperature: number,
    max_tokens: number
}


export async function createImage(prompt: string): Promise<ImageResponse> {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': PUBLIC_AUTHORIZATION
        }
    }
    const response = await fetch(
        PUBLIC_API_URL + '/image?message=' + prompt,
        options
    );
    const data = await response.text();
    return {
        url: data,
        success: true,
    };
}

export async function createCompletion(props: CompletionProps): Promise<string> {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': PUBLIC_AUTHORIZATION,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
    }
    const response = await fetch(
        PUBLIC_API_URL + '/prompt',
        options
    );
    const data = await response.json();
    return data.choices[0].text;
}