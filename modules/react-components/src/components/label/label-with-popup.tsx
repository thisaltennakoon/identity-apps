/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import { Divider, Grid, Label, Popup, SemanticCOLORS } from "semantic-ui-react";

export interface LabelWithPopupPropsInterface {
    /**
     * Header of the popup
     */
    popupHeader?: string;
    /**
     * Sub heading of the popup
     */
    popupSubHeader?: ReactNode | string;
    /**
     * Popup content
     */
    popupContent?: ReactNode | string;
    /**
     * Popup footer right actions
     */
    popupFooterRightActions?: any;
    /**
     * Popup footer left actions
     */
    popupFooterLeftActions?: any;
    /**
     * Popup footer left side content
     */
    popupFooterLeftContent?: ReactNode | string;
    /**
     * Color of the circular label.
     */
    labelColor: SemanticCOLORS;
}

/**
 * Content loader component.
 *
 * @param {ContentLoaderPropsInterface} props - Props injected to the global loader component.
 *
 * @return {React.ReactElement}
 */
export const LabelWithPopup: FunctionComponent<LabelWithPopupPropsInterface> = (
    props: LabelWithPopupPropsInterface
): ReactElement => {

    const {
        popupHeader,
        popupSubHeader,
        popupContent,
        popupFooterRightActions,
        popupFooterLeftActions,
        popupFooterLeftContent,
        labelColor
    } = props;
    return (
        <Popup
            size="small"
            wide
            className="cors-details-popup"
            basic
            position="right center"
            on="click"
            trigger={
                <Label
                    className="micro spaced-right"
                    circular
                    color={ labelColor }
                    size="mini"
                />
            }
        >
            <Popup.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Popup.Header>
                                <strong>{ popupHeader }</strong>
                            </Popup.Header>
                            { popupSubHeader }
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            { popupContent }
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row>
                        {
                            popupFooterLeftContent && (
                                <Grid.Column verticalAlign="middle" floated="left" width={ 10 }>
                                    { popupFooterLeftContent }
                                </Grid.Column>
                            )
                        }
                        {
                            popupFooterRightActions && (
                                <Grid.Column verticalAlign="middle" floated="right" width={ 6 }>
                                    { popupFooterRightActions }
                                </Grid.Column>
                            )
                        }
                    </Grid.Row>
                </Grid>
            </Popup.Content>
        </Popup>
    );
};
