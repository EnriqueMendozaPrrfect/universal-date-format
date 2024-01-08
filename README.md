# Universal Date Format
> The Universal Date Format is a library that aims to provide an easy way to format the date to make it easier for human users to understand.

#### Prerequisites
use node 16.9.0 or lastest

## Developer Setup
```
 npm i universal-date-format
```
## Quickstart
```
  import UniversalDateFormat from 'universal-date-format'

  const dateFormater = new UniversalDateFormat(new Date(2020, 0, 15))

  dateFormater.getDateFormat()
```

getDateFormat return Date as format YYYYMMDD.

```
  2020/1/15
```

### Usage
Universal Date Format can be created using 2 way, you can give a Date or String.
```
new UniversalDateFormat(new Date(2020, 0, 15))
new UniversalDateFormat(new Date('2020-01-15T00:00:00.000Z'))
```

**Set MMDDYYYY as default**
```
  dateFormater.setMMDDYYYYAsDefault()
  // 1/15/2020
```

**Set DDMMYYYY as default**
```
  dateFormater.setDDMMYYYYAsDefault()
  // 15/1/2020
```

**Set YYYYMMDD as default**
```
  dateFormater.setYYYYMMDDAsDefault()
  // 2020/1/15
```

**Change mounths using names**
```
  dateFormater.useMonthName()
  // 2020/January/15
```

**Change months using number of month**
```
  dateFormater.useMonthNumber()
  // 2020/1/15
```

**Change mounths name**
```
  dateFormater.modifyMonthsName(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
  dateFormater.useMonthNumber()
  // 2020/Jan/15
```

**Get day of month**
```
  dateFormater.getDayName()
  // Wednesday
```

**Change mounths name**
```
  dateFormater.modifyDaysName(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
  dateFormater.getDayName()
  // Wed
```

**Change divisions**
Universal Date Format have to way to change de division of date, modifyDiv recive a String or an array of two Strings, and the second paramether is a boolean if you want use spaces between of the division.
```
  dateFormater.modifyDiv('-')
  // 2020-1-15
```

the array is used for other idioms like the spanish.

```
  dateFormater.setDDMMYYYYAsDefault()
  dateFormater.modifyMonthsName(['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago.','Sep.','Oct.','Nov.','Dec.'])
  dateFormater.modifyDiv(['de', 'del'], true)
  // 15 de Ene. del 2020
```

**Get hour**
```
  dateFormater.getHourFormat()
  // 17:08
```

To receive  the the seconds you can send a boolean when you call getHourFormat().

```
  dateFormater.getHourFormat(true)
  // 17:08:58
```

**Get hour as meridian format**
```
  dateFormater.useMeridianFormat()
  dateFormater.getHourFormat()
  // 17:08
```
