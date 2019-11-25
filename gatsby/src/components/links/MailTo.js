import React from "react"

import { Typography } from '@material-ui/core'

const MailTo = (user) => {
    return (
        <a href={'mailto:' + user.user.email}>
            <Typography variant={'caption'}>
                {user.user.email}
            </Typography>
        </a>
    )
}

export default MailTo