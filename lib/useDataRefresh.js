import { useEffect, useCallback } from 'react';
import { eventBus } from '../components/Header2/Header2';

export const useDataRefresh = (refreshFunction) => {
    const handleDataRefresh = useCallback(() => {
        if (refreshFunction) {
            refreshFunction();
        }
    }, [refreshFunction]);

    useEffect(() => {
        eventBus.on('dataRefreshed', handleDataRefresh);
        
        return () => {
            eventBus.off('dataRefreshed', handleDataRefresh);
        };
    }, [handleDataRefresh]);

    return {
        refreshData: handleDataRefresh
    };
};
