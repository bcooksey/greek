#!/bin/python
import re
import sys

def parse_noun(line):
    parts = line.split('-')
    if len(parts) == 1:
        parts = line.split('–')

    greek = parts[0].split(',')[0].strip()
    article = parts[0].split(',')[1].strip()
    english = parts[1].strip()
    return f"greek: '{greek}', english: '{english}', type: 'noun', article: '{article}'"

def parse_third_declension_noun(line):
    parts = line.rsplit('-', maxsplit=1)
    if len(parts) == 1:
        parts = line.rsplit('–', maxsplit=1)

    greek = parts[0].rsplit(',', maxsplit=1)[0].strip()
    article = parts[0].rsplit(',', maxsplit=1)[1].strip()
    english = parts[1].strip()
    return f"greek: '{greek}, {article}', english: '{english}', type: 'noun', article: '{article}'"

def parse_verb(line):
    parts = line.split('-')
    if len(parts) == 1:
        parts = line.split('–')

    greek = parts[0].strip()
    english = parts[1].strip()
    return f"greek: '{greek}', english: '{english}', type: 'verb'"

def parse_verb_with_irregular(line, get_irregular=False):
    parts = line.split('-')
    if len(parts) == 1:
        parts = line.split('–')

    greek = parts[0].strip()
    root = greek.split('(')[0].strip()
    irregular = re.search('\((.*)\)', greek).group(0)
    english = parts[1].strip()
    if get_irregular:
        return f"greek: '{irregular}', english: '{english} (Perfect of {root})', type: 'verb'"

    return f"greek: '{root}', english: '{english}', type: 'verb'"

def parse_adjective(line):
    parts = line.rsplit('–', maxsplit=1)
    if len(parts) == 1:
        parts = line.rsplit('-', maxsplit=1)

    greek = parts[0].strip()
    english = parts[1].strip()
    return f"greek: '{greek}', english: '{english}', type: 'adjective'"

def smart_parse(line):
    parts = line.rsplit('–', maxsplit=1)
    if len(parts) == 1:
        parts = line.rsplit('-', maxsplit=1)

    comma_count = parts[0].count(',')
    dash_count = parts[0].count('-') + parts[0].count('–')
    if comma_count == 0:
        return parse_verb(line)
    elif comma_count == 1:
        return parse_noun(line)
    elif comma_count == 2:
        if dash_count > 1:
            return parse_adjective(line)
        else:
            return parse_third_declension_noun(line)

    print(f'what the heck is {comma_count} {dash_count}: ' + parts[0])

chap_number = sys.argv[1] or '1'
with open('input.txt', 'r', encoding="utf-8") as in_file:
    with open('output.txt', 'w', encoding="utf-8") as out_file:
        for line in in_file:
            out = smart_parse(line)
            # out = parse_verb_with_irregular(line, get_irregular=False)
            # out_file.write("{chap: '" + chap_number + "', " + out + "},\n")
            # out = parse_verb_with_irregular(line, get_irregular=True)
            out_file.write("{chap: '" + chap_number + "', " + out + "},\n")
