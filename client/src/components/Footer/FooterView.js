/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clientJson from '../../../package.json';
import FabricVersion from '../../FabricVersion';

const styles = theme => {
	const { type } = theme.palette;
	const dark = type === 'dark';
	return {
		root: {
			margin: '2%'
		},
		footer: {
			backgroundColor: dark ? '#5e558e' : '#e8e8e8',
			color: dark ? '#ffffff' : undefined,
			textAlign: 'center',
			position: 'fixed',
			left: 0,
			right: 0,
			bottom: 0
		}
	};
};

const FooterView = ({ classes }) => (
	<div className={classes.root}>
		<div>
			<div className={classes.footer}>
				{'区块链浏览器版本: '}
				{clientJson.version}
				&emsp;
				{'Fabric兼容性: '} {FabricVersion.map(v => v)}
			</div>
		</div>
	</div>
);

export default withStyles(styles)(FooterView);
