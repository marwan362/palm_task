import React, { useCallback, useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MoodType } from '../../types';
import { getWellnessHistory } from '../../apis/wellness';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading';
import Error from '../../components/error';
import locales from '../../locales';
import Empty from '../../components/empty';
import { useFocusEffect } from '@react-navigation/native';
import HistoryEntryItem from './components/historyEntryItem';
export type HistoryEntry = {
  id: string;
  date: string;
  sleepHours: number;
  notes: string;
  mood: MoodType;
};

const HistoryScreen = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['wellnessHistory'],
    queryFn: getWellnessHistory,
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const historyData = useMemo(() => {
    return (
      data?.data?.map((entry: any, index: number) => ({
        id: index.toString(),
        date: new Date().toISOString().split('T')[0],
        sleepHours: entry.sleep,
        notes: entry.notes,
        mood: entry.mood as MoodType,
      })) || []
    );
  }, [data]);
  const isEmptyHistory = !historyData?.length;

  const renderItem = useCallback(
    ({ item, index }: { item: HistoryEntry; index: number }) => (
      <HistoryEntryItem item={item} delay={index * 200} />
    ),
    [],
  );

  const keyExtractor = useCallback((item: HistoryEntry) => item.id, []);

  if (isLoading) {
    return <Loading text={locales.historyScreen.loading} />;
  }

  if (isError) {
    return <Error text={locales.historyScreen.noData} />;
  }

  if (isEmptyHistory) {
    return <Empty text={locales.historyScreen.noData} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default React.memo(HistoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
