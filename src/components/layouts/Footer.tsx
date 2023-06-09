import React from 'react'
import { Container, Card, Row, Col, Text, Grid } from "@nextui-org/react";

function Footer() {
  return (
    <Container gap={0}>

      {/* 1列目 */}
      <Row gap={0}>
        <Card css={{ $$cardColor: '$colors$neutral' }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                フッターです
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      {/* 2列目 */}
      <Grid.Container gap={0}>
        <Grid xs={12} sm={4}>
            <Card css={{ $$cardColor: '$colors$neutral' }}>
              <Card.Body>
                <Row justify="center" align="center">
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    なんか書けます2
                  </Text>
                </Row>
              </Card.Body>
            </Card>
        </Grid>

      {/* 真ん中 */}
        <Grid xs={12} sm={4}>
          <Card css={{ $$cardColor: '$colors$neutral' }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  なんか書けます2
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Grid>

        {/* 右 */}
        <Grid xs={12} sm={4}>
          <Card css={{ $$cardColor: '$colors$neutral' }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  なんか書けます2
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>

      {/* 3列目 */}
      <Row>
        <Col>
          <Card css={{ $$cardColor: '$colors$neutral' }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  一番したです
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer