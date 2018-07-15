import { OrderedMap } from 'immutable';

export function generateId() {
  return Date.now();
}

/**
 * From
 * ewqrddsxID: {
    title: 'Agent Conf',
    url: 'http://www.agent.sh/',
    where: 'Dornbirn, Austria',
    when: 'January 20-21, 2017',
    month: 'January',
    submissionDeadline: '',
  }
 * TO
 * ewqrddsxID: {
    uid: 'ewqrddsxID', <-- DIFF
    title: 'Agent Conf',
    url: 'http://www.agent.sh/',
    where: 'Dornbirn, Austria',
    when: 'January 20-21, 2017',
    month: 'January',
    submissionDeadline: '',
  }
 * @param data
 * @param RecordModel
 * @returns {Immutable.Iterable.Keyed<any, any>}
 */
export function fbDataToEntities(data, RecordModel) {
  return (new OrderedMap(data)).mapEntries(([uid, value]) => (
    [uid, (new RecordModel(value)).set('uid', uid)]
  ));
}
