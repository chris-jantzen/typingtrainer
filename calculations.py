
""" Calculating time """
import time

# demo times should be 3 seconds apart
start = time.gmtime()
time.sleep(3)
end = time.gmtime()


getSeconds = lambda time: time.tm_sec
getMinutes = lambda time: time.tm_min

def convertToOnlySeconds(time):
    mins = getMinutes(time)
    secs = getSeconds(time)
    return secs + (mins * 60)

def getElapsedTime(start, end):
    return convertToOnlySeconds(end) - convertToOnlySeconds(start)

print("Time:")
print(getElapsedTime(start, end), "seconds", end="\n\n")


""" Accuracy calculations """
# in implementation, read in from the text_base table database by using the text_id from the times table
totalCharacters = 122

# in implementation, to be read in from the times table in the database
numberGreen = 102
numberYellow = 18
numberRed = 2

#real accuracy is the amount of times that characters were correctly typed the first time
realAccuracy = lambda green, total: convertToPercent(green/total)

#overall accuracy is the number of times characters were typed correctly overall including corrected errors (green + yellow)
overallAccuracy = lambda green, yellow, total: convertToPercent((green + yellow) / total)


truncateToThreeDecimals = lambda decimal: '%.3f' % round(decimal * 1000 / 1000,3)
toPercent = lambda decimal: (decimal[-3:-1] + '.' + decimal[-1:] + '%')

def convertToPercent(decimal):
    return toPercent(truncateToThreeDecimals(decimal))

def getAccuracies(green, yellow, red, total):
    print("Real Accuracy:", realAccuracy(green, total))
    print("Overall Accuracy:", overallAccuracy(green, yellow, total))
    print("Number of characters correct the first try:", green)
    print("Number of characters correct after correction:", yellow)
    print("Number of characters left incorrect:", red)

print("Accuracy:")
getAccuracies(numberGreen, numberYellow, numberRed, totalCharacters)