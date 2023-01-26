import { Stack, Text, Loader ,Container} from '@mantine/core';
import React, { useEffect, useTransition } from 'react'

const MassiveSearch = () => {
    const [list, setList] = React.useState([]);
    const [isPending, startTransition] = useTransition();
    const [search, setSearch] = React.useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        startTransition(async () => {
            const l = []
            for (let i = 0; i < list.length; i++) {
                l.push(search)
            }
            setList(l)
        })
    }

    useEffect(() => {
        setList(Array(20000).fill(0).map((_, i) => i))
    }, [])

    return (
        <Stack>
            <h1>MassiveSearch</h1>
            <input type="text" placeholder="Search" onChange={handleChange} />
            {isPending ? <Container><Loader color="indigo" size="xl" variant="dots"  /></Container> : list.map((item, index) => (
                <Text key={index} className={isPending ? 'fade' : ''}>{item}</Text>
            )
            )}
        </Stack >
    )
}

export default MassiveSearch