import type { IFlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';

type THStackProps = Omit<IFlexProps, 'direction'>;

export const HStack = (props: THStackProps) => {
    return <Flex direction="row" {...props} />;
};
