import React from "react";
import { Card, Grid, Table, Text } from "@nextui-org/react";
import dashboardbottom from "./dashboardbottom.module.scss";

const DashboardBottomUI = () => {
    return (
        <>
            <Card className={dashboardbottom.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body>
                    <Text>Dashboard Bottom</Text>
                    <Table
                        aria-label="Example static collection table"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="single"
                    >
                        <Table.Header>
                            <Table.Column>Title</Table.Column>
                            <Table.Column>URL</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell>Tony Reichert</Table.Cell>
                                <Table.Cell>CEO</Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell>Zoey Lang</Table.Cell>
                                <Table.Cell>Technical Lead</Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell>Jane Fisher</Table.Cell>
                                <Table.Cell>Senior Developer</Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Community Manager</Table.Cell>
                            </Table.Row>
                            <Table.Row key="5">
                                <Table.Cell>Tony Reichert</Table.Cell>
                                <Table.Cell>CEO</Table.Cell>
                            </Table.Row>
                            <Table.Row key="6">
                                <Table.Cell>Zoey Lang</Table.Cell>
                                <Table.Cell>Technical Lead</Table.Cell>
                            </Table.Row>
                            <Table.Row key="7">
                                <Table.Cell>Jane Fisher</Table.Cell>
                                <Table.Cell>Senior Developer</Table.Cell>
                            </Table.Row>
                            <Table.Row key="8">
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Community Manager</Table.Cell>
                            </Table.Row>
                            <Table.Row key="9">
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Community Manager</Table.Cell>
                            </Table.Row>
                            <Table.Row key="10">
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Community Manager</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default DashboardBottomUI;
