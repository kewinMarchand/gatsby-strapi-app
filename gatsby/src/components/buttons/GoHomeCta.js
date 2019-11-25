import React from "react"
import { Link } from "gatsby"

import { Button, Typography } from '@material-ui/core'

const GoHomeCta = () => {
    return (
        <Link to="/">
            <Button size={'small'}>
                <Typography variant={'caption'}>
                    Retourner à l'accueil
                </Typography>
            </Button>
        </Link>
    )}

export default GoHomeCta