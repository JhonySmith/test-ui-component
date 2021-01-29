import React from 'react';

import { TabsList } from './styles/tabs-list';
import { TabItem } from './styles/tab-item';

import { TabsTypes, TabsArrayTypes } from '../types/types';

interface TabsProps {
	tabs: TabsArrayTypes;
	selected: TabsTypes;
	duration: number;
	onSelect(tab: TabsTypes): void;
}

const Tabs: React.FC<TabsProps> = (props) => {
	const { tabs, selected, duration, onSelect } = props;

	return (
		<TabsList>
			{tabs.map((tab, index) => (
				<TabItem
					selected={selected === tab}
					key={index}
					onClick={() => onSelect(tab)}
					duration={duration}
				>
					{tab}
				</TabItem>
			))}
		</TabsList>
	);
};

export default Tabs;
