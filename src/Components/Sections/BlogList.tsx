import {useEffect, useState} from "react";
import {Post, PostService} from "../../api";

export default function BlogList() {
    const [posts, setPosts] = useState<Post[]>()

    useEffect(() => {
        PostService.getPost().then((r) => {
            setPosts(r)
        })
    }, []);

    return (
        <div>
            {
                posts?.map((e) => (
                    <div className={'card'}>
                        <h1>{e.title}</h1>
                    </div>
                ))
            }
        </div>
    );
}