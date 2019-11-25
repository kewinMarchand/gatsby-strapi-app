import React from "react"
import { Link } from "gatsby"

import { Button, Typography } from '@material-ui/core'

const GoPostsCta = () => {
    return (
        <Link to="/articles">
            <Button size={'small'}>
                <Typography variant={'caption'}>
                    Voir la liste des articles
                </Typography>
            </Button>
        </Link>
    )
}

export default GoPostsCta