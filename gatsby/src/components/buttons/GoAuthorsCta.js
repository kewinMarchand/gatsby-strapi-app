import React from "react"
import { Link } from "gatsby"

import { Button, Typography } from '@material-ui/core'

const GoAuthorsCta = () => {
    return (
        <Link to="/authors/">
            <Button size={'small'}>
                <Typography variant={'caption'}>
                    Voir tous les auteurs
                </Typography>
            </Button>
        </Link>
    )
}

export default GoAuthorsCta