class Map
    def initialize
        @map = Array.new(0)
    end

    def set(key,value)
        p_index = @map.index { |pair| pair[0] == key}
        if key_exists?(key) == false
            @map << [key, value]
        else
            @map[p_index][1] = value
        end
    
    end


    def get(key)
        @map.each { |subArray| return subArray[1] if subArray[0] == key }
                    
    end

    def delete(key)
        @map.reject! { |subArray| subArray[0] == key }

    end

    def show
        @map
    end

    def key_exists?(key)
        @map.each { |subArray| return true if subArray[0] == key }
        false
        
    end

end