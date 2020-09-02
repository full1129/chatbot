import { lang } from 'botpress/shared'
import React, { FC } from 'react'
import { Alert, Card, CardBody, CardText, CardTitle } from 'reactstrap'

import logo from '../../media/logo-icon.svg'

interface Props {
  title?: string
  subtitle?: React.ReactNode
  error?: string | null
  poweredBy?: boolean
  children: React.ReactNode
}

export const LoginContainer: FC<Props> = props => {
  return (
    <div className="centered-container">
      <div className="middle">
        <div className="inner">
          
          <Card body>
            <CardBody className="login-box">
              <div>
                <CardTitle>
                  <strong>{props.title || 'Botpress'}</strong>
                </CardTitle>
                <CardText>{props.subtitle || ''}</CardText>
                {props.error && <Alert color="danger">{props.error}</Alert>}
                {props.children}
              </div>
            </CardBody>
          </Card>
          {props.poweredBy && (
            <div className="homepage">
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
