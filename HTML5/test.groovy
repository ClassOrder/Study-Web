import org.junit.Test

class TreeTest {
    
    @Test
    void toTreeTest(){
        List<Map> source = [
            [id: 1, parentId: 0,],
            [id: 2, parentId: 0,],
            [id: 3, parentId: 1,],
            [id: 4, parentId: 0,],
            [id: 5, parentId: 1,],
            [id: 6, parentId: 4,],
            [id: 7, parentId: 5,],
        ]

        Map tree = toTree(source)

        def treeView = {x, sub ->
            if(sub.subs) {
                treeView(sub.subs)
            } else {
                println sub
            }
        }
        tree.each{key, Map it ->
            println it
            if(it.subs){
                it.subs.each{subkey, Map sub ->
                println "\t" + sub
                }
            }
        }
    }

    private Map toTree(List<Map> source, parentId = 0) {
        Map tree = [:]
        source.each {
            it['subs'] = [:]
            println "it.parentId: " + it['parentId']
            println "parentId: " + parentId
            if(it.parentId == parentId) {
                tree[it.id] = it
            } else {
                toTree(it, it['parentId'])
                Map parent
                if(tree[it.parentId]){
                    parent = tree[it.parentId]
                } else {
                    parent = tree[1]['subs'][it.parentId]
                }
                parent['subs'][it.id] = it
            }
        }
        return tree
    }
}