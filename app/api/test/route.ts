import {NextResponse} from 'next/server'
import {use} from 'react';

export async function GET(){
    const users = [
        {id: 1, name: 'Vincent'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Mary'},
    ];
    return NextResponse.json(users)
}